<?php

namespace App\Http\Controllers;

use App\Alert;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $rowsPerPage = 10;

        if ($request->has('rowsPerPage')) {
            $rowsPerPage = $request->input('rowsPerPage');
        }

        $users = User::orderBy('id', 'DESC');

        if ($request->has('filter')) {
            $filter = $request->input('filter');

            $users = $users->where(function ($query) use ($filter) {
                $query->where('name', 'LIKE', "%" . $filter . "%")
                    ->orWhere('email', 'LIKE', "%" . $filter . "%");
            });
        }

        $users = $users->paginate($rowsPerPage);

        $response = [
            'users'  => $users,
            'params' => [
                'total'        => $users->total(),
                'current_page' => $users->currentPage(),
                'per_page'     => $users->perPage(),
            ],
        ];

        return response()->json($response);
    }

    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $inputs = $request->all();
            $user   = User::create($inputs);

            if ($user->profile === 2) {
                $alert          = new Alert;
                $alert->day     = 7;
                $alert->user_id = $user->id;
                $alert->save();
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['No es posible realizar esta acción, por favor inténtelo de nuevo más tarde.'], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'Los datos se registraron con éxito!',
        ], 201);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json([
            'success' => true,
            'data'    => $user,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        //TODO
        try {
            $inputs = $request->all();
            $user   = User::find($id);
            $user->update($inputs);
            $user->alert;
            return response()->json([
                'success' => true,
                'message' => 'Los datos se actualizaron con éxito!',
                'user'    => $user,
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['No es posible realizar esta acción, por favor inténtelo de nuevo más tarde.'], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $user = User::find($id);
            $user->delete();
        } catch (\Exception $e) {
            return response()->json(['No es posible realizar esta acción, por favor inténtelo de nuevo más tarde.'], 500);
        }
        return response()->json([
            'success' => true,
            'message' => 'Los datos se eliminaron con éxito!',
        ], 200);
    }

    public function password(Request $request, $id)
    {
        try {
            $inputs = $request->all();
            $query  = User::where('id', $id);
            $user   = User::find($id);
            if (Hash::check($inputs['pass'], $user->password)) {
                if (isset($inputs['password'])) {
                    $inputs['password'] = bcrypt($inputs['password']);
                }
                $query->update(['password' => $inputs['password']]);
                return response()->json([
                    'success' => true,
                    'message' => 'Los datos se actualizaron con éxito!',
                ]);
            } else {
                return response()->json([
                    'success' => false,
                ]);
            }
        } catch (\Exception $e) {
            return response()->json(['No es posible realizar esta acción, por favor inténtelo de nuevo más tarde.'], 500);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends BaseController
{
    public function register(Request $request)
    {
        // $request->validate([
        //     'name'      => 'required|string',
        //     'email'     => 'email|unique:users,email',
        //     'password'  => 'required|confirmed|min:8',
        // ]);

        $validator = Validator::make($request->all(), [
            'name'      => 'required|string',
            'email'     => 'email|unique:users,email',
            'password'  => 'required|confirmed|min:8',
        ]);

        if($validator->fails()) {
            return response([
                'error' => $validator->errors(),
            ] ,422);
        }

        $user = User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => bcrypt($request->password),
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user'  => $user,
            'token' => $token,
        ]);
    }

    public function login(Request $request)
    {
        // $credentials = $request->validate([
        //     'email'     => 'email|exists:users,email',
        //     'password'  => 'required|min:8',
        // ]);

        // if(!auth()->attempt($credentials)) {
        //     return response([
        //         'error' => 'Invalid Credentials'
        //     ], 422);
        // }

        $validator = Validator::make($request->all(), [
                'email'     => 'email|exists:users,email',
                'password'  => 'required|min:8',
        ]);

        if($validator->fails()) {
            return response([
                'error' => $validator->errors(),
            ],422);
        }

        $credentials = $request->only(['email', 'password']);

        if(!auth()->attempt($credentials)) {
            return response('Invalid Credentials', 422);
        }

        $user = auth()->user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user'  => $user,
            'token' => $token,
        ]);
    }
}

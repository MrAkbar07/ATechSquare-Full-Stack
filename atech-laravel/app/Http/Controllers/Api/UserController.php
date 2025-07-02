<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Services\User\UserService;
use App\Http\Resources\Users\UserCollection;

class UserController extends Controller
{

    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $args = $request->validate([
            'limit' => 'numeric|nullable',
            'offset' => 'numeric|nullable',
            'search' => 'string|nullable',
            'sort_order' => 'string|nullable',
        ]);

        $limit = $request->filled('limit') ? $request->input('limit') : 10;

        $user_list = $this->userService->getAll($args)->paginate($limit);

        $response = new UserCollection($user_list);
        return response()->json($response);
    }

    /**
     * Store a newly created user.
     */
    public function create(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => 'required|string|min:8',
            'confirm_password' => 'required|string|min:8|same:password',
        ]);

        // Remove confirm_password from fields as it's not needed for user creation
        unset($fields['confirm_password']);
        
        // Hash the password
        $fields['password'] = bcrypt($fields['password']);

        try {
            // Create the user using the service
            $user = $this->userService->create($fields);

            return response()->json([
                'success' => true,
                'message' => 'User created successfully',
                'data' => $user
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create user',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

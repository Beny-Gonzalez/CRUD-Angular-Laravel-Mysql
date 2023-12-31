<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $employees = Employee::all();
        // return response()->json($employees);
        //$id=4;
        //$employees = Employee::with(['name,address'])->find($id);

        //$input = $request->all();

        //$employees = Employee::with(['Employee:id,name,mobile'])->where('name','like',"%{$request->pedro}%")->get();
        //$employees=DB::table('employees')->select('*')->where('name','=',DB::raw('pedro'))->get();

        return $employees;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $employees = new Employee([
            'name' => $request->input('name'),
            'address' => $request->input('address'),
            'mobile' => $request->input('mobile'),
        ]);
        $employees->save();
        return response()->json('Employee created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $contact = Employee::find($id);
        return response()->json($contact);

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
        $employees = Employee::find($id);
        $employees->update($request->all());
        return response()->json('Employee updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $employees = Employee::find($id);
        $employees->delete();
        return response()->json(' deleted!');
    }
}

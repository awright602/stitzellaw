<?php

namespace App\Http\Controllers;

use App\Models\Consult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Consult as ConsultMail;

class ConsultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'name'    => 'required|string',            
            'email'   => 'required|email',
            'phone'   => 'required|string|min:10|numeric',
            'details' => 'required|string',
        ];
        $this->validate($request, $rules);

        $consult = Consult::create($request->only(array_keys($rules)));

        // Mail::to(['howardstitzel@yahoo.com'])->send(new ConsultMail($consult));
        Mail::to(['wwright2@gmail.com'])->send(new ConsultMail($consult));
        return response()->json(['status' => 'SUCCESS', 'data' => $consult]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Consult  $consult
     * @return \Illuminate\Http\Response
     */
    public function show(Consult $consult)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Consult  $consult
     * @return \Illuminate\Http\Response
     */
    public function edit(Consult $consult)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Consult  $consult
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Consult $consult)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Consult  $consult
     * @return \Illuminate\Http\Response
     */
    public function destroy(Consult $consult)
    {
        //
    }
}

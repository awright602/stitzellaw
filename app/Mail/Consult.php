<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Consult as ConsultModel;

class Consult extends Mailable
{
    use Queueable, SerializesModels;

    public $consult;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(ConsultModel $consult)
    {
       $this->consult = $consult;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.consult')
            ->text('emails.consult_plain')
            ->with(['consult' => $this->consult])
            ->subject("New Contact Form {$this->consult->name}- stitzellaw.com");
    }
}

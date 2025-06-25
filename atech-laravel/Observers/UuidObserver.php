<?php

namespace App\Observers;
use Illuminate\Support\Str;

class UuidObserver
{
    public function creating($model)
    {
        $model->uuid = (string) Str::uuid();
    }
}

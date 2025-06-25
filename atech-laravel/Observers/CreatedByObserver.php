<?php
namespace App\Observers;

class CreatedByObserver
{
    public function creating($model)
    {
        if($model->created_by == null) {
            $model->created_by = (auth()->user()) ? auth()->user()->id : null;
        }
    }
}

<?php
namespace App\Models\Traits;
use App\Observers\CreatedByObserver;

trait CreatedByTrait
{
    protected static function bootCreatedByTrait()
    {
        static::observe(new CreatedByObserver);
    }
}

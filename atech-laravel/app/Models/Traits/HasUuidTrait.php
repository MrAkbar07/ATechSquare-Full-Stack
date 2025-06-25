<?php
namespace App\Models\Traits;
use Illuminate\Support\Str;
use App\Observers\UuidObserver;

trait HasUuidTrait
{
    /**
     * Boot function from Laravel to attach model events.
     */
    protected static function bootHasUuidTrait()
    {
        static::observe(new UuidObserver);
    }
}

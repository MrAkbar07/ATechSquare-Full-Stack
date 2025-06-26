<?php

namespace App\Filament\Resources\User\User\UserResoureceResource\Pages;

use App\Filament\Resources\User\User\UserResoureceResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateUserResourece extends CreateRecord
{
    protected static string $resource = UserResoureceResource::class;

    // Roles are now handled automatically by the relationship
}

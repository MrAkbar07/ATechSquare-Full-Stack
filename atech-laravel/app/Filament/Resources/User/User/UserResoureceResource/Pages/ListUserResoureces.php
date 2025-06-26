<?php

namespace App\Filament\Resources\User\User\UserResoureceResource\Pages;

use App\Filament\Resources\User\User\UserResoureceResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListUserResoureces extends ListRecords
{
    protected static string $resource = UserResoureceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

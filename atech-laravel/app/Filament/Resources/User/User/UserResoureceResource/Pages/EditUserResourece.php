<?php

namespace App\Filament\Resources\User\User\UserResoureceResource\Pages;

use App\Filament\Resources\User\User\UserResoureceResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditUserResourece extends EditRecord
{
    protected static string $resource = UserResoureceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}

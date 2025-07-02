<?php

namespace App\Filament\Resources\User\User\Traits;

use Filament\Forms\Form;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Spatie\Permission\Models\Role;

trait UserFormTrait
{
    public static function form(Form $form): Form
    {
        return $form->schema([
            TextInput::make('name')
                ->required()
                ->maxLength(255),
            TextInput::make('email')
                ->email()
                ->required()
                ->maxLength(255),
            TextInput::make('password')
                ->password()
                ->required(function (string $context): bool {
                    return $context === 'create';
                })
                ->dehydrated(fn ($state) => filled($state))
                ->maxLength(255),
            Select::make('roles')
                ->relationship('roles', 'name')
                ->options(Role::all()->pluck('name', 'id'))
                ->multiple()
                ->preload()
                ->searchable()
                ->required(),
        ]);
    }
}

<?php

namespace App\Filament\Resources\User\User;

use App\Filament\Resources\User\User\UserResoureceResource\Pages;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use App\Models\User;
use App\Filament\Resources\User\User\Traits\UserFormTrait;
use Filament\Tables\Columns\TextColumn;
class UserResoureceResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return UserFormTrait::form($form);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name'),
                TextColumn::make('email'),
                TextColumn::make('roles.name')
                    ->badge()
                    ->separator(',')
                    ->label('Roles')
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUserResoureces::route('/'),
            'create' => Pages\CreateUserResourece::route('/create'),
            'edit' => Pages\EditUserResourece::route('/{record}/edit'),
        ];
    }
}

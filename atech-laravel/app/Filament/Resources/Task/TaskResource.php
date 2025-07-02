<?php

namespace App\Filament\Resources\Task;

use App\Filament\Resources\Task\TaskResource\Pages;
use App\Filament\Resources\Task\TaskResource\RelationManagers;
use App\Models\Task\Task;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TimePicker;
use Filament\Forms\Components\Checkbox;
use App\Enums\TaskStatusEnum;
use App\Enums\TaskPriorityEnum;
use App\Models\User;
use Filament\Tables\Columns\TextColumn;

class TaskResource extends Resource
{
    protected static ?string $model = Task::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->maxLength(150),
                Textarea::make('description')
                    ->required()
                    ->rows(3),
                Select::make('status')
                    ->options(TaskStatusEnum::class)
                    ->required(),
                Select::make('priority')
                    ->options(TaskPriorityEnum::class)
                    ->required(),
                DatePicker::make('deadline')
                    ->required(),
                Select::make('user_id')
                    ->options(User::all()->pluck('name', 'id'))
                    ->required(),
                Select::make('created_by')
                    ->options(User::all()->pluck('name', 'id'))
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title'),
                TextColumn::make('description')
                    ->limit(50)
                    ->tooltip(fn (TextColumn $column): string => $column->getState()),
                TextColumn::make('status')
                    ->badge()
                    ->sortable()
                    ->getStateUsing(function ($record) {
                        return $record->status->getLabel();
                    })
                    ->color(function ($record) {
                        return $record->status->getColor();
                    }),
                TextColumn::make('priority'),
                TextColumn::make('deadline')
                    ->date('M d, Y')
                    ->sortable(),
                TextColumn::make('user_id')
                    ->label('Assigned To')
                    ->getStateUsing(function ($record) {
                        return $record->user->name;
                    }),
                TextColumn::make('created_by')
                    ->label('Created By')
                    ->getStateUsing(function ($record) {
                        return $record->createdBy->name;
                    }),
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
            'index' => Pages\ListTasks::route('/'),
            'create' => Pages\CreateTask::route('/create'),
            'edit' => Pages\EditTask::route('/{record}/edit'),
        ];
    }
}

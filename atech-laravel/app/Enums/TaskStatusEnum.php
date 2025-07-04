<?php

namespace App\Enums;
use Filament\Support\Contracts\HasLabel;
use Filament\Support\Contracts\HasColor;
// use Filament\Support\Contracts\HasIcon;

enum TaskStatusEnum: string implements HasLabel, HasColor
{
    case Pending = 'pending';
    case InProgress = 'in_progress';
    case Completed = 'completed';

    public function getLabel(): string
    {
        return match ($this) {
            self::Pending => 'Pending',
            self::InProgress => 'In Progress',
            self::Completed => 'Completed',
        };
    }

    public function getColor(): string
    {
        return match ($this) {
            self::Pending => 'gray',
            self::InProgress => 'warning',
            self::Completed => 'success',
        };
    }

    // public function getIcon(): string
    // {
    //     return match ($this) {
    //         self::Pending => 'clock',
    //         self::InProgress => 'clock',
    //         self::Completed => 'check',
    //     };
    // }

    public function getBadgeColor(): string
    {
        return match ($this) {
            self::Pending => 'gray',
            self::InProgress => 'warning',
            self::Completed => 'success',
        };
    }
}

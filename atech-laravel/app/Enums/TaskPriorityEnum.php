<?php

namespace App\Enums;

use Filament\Support\Contracts\HasLabel;
use Filament\Support\Contracts\HasColor;
// use Filament\Support\Contracts\HasIcon;

enum TaskPriorityEnum: string implements HasLabel, HasColor
{
    case Low = 'low';
    case Medium = 'medium';
    case High = 'high';

    public function getLabel(): string
    {
        return match ($this) {
            self::Low => 'Low',
            self::Medium => 'Medium',
            self::High => 'High',
        };
    }

    public function getColor(): string
    {
        return match ($this) {
            self::Low => 'gray',
            self::Medium => 'warning',
            self::High => 'danger',
        };
    }

    // public function getIcon(): string
    // {
    //     return match ($this) {
    //         self::Low => 'clock',
    //         self::Medium => 'clock',
    //         self::High => 'clock',
    //     };
    // }
}

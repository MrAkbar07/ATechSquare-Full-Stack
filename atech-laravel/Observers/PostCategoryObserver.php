<?php

namespace App\Observers;

use App\Models\Blog\PostCategory;

class PostCategoryObserver
{
    public function creating(PostCategory $category): void
    {
        
    }

    public function deleted(PostCategory $category): void
    {
        
    }
}
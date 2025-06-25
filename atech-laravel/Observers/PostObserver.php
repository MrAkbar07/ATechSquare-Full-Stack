<?php
namespace App\Observers;

use App\Models\Blog\Post;
use App\Enums\PostStatus;
use Illuminate\Support\Facades\Cache;

class PostObserver
{
    /**
     * Handle the Post "created" event.
     */
    public function created(Post $post): void
    {
        //
    }

    /**
     * Handle the Post "updated" event.
     */
    public function updated(Post $post): void
    {
        //
    }

    /**
     * Handle the Post "created" and "updated" event.
     */
    public function saved(Post $post): void
    {
        Cache::forget('post-status-counts');
    }

    /**
     * Handle the Post "deleted" event.
     */
    public function deleted(Post $post): void
    {
        $post->update(['post_status' => PostStatus::Trashed]);
        Cache::forget('post-status-counts');
    }

    /**
     * Handle the Post "restored" event.
     */
    public function restored(Post $post): void
    {
        if($post->post_status == PostStatus::Trashed) {
            $post->update(['post_status' => PostStatus::Draft]);
        }
        Cache::forget('post-status-counts');
    }

    /**
     * Handle the Post "force deleted" event.
     */
    public function forceDeleted(Post $post): void
    {
        //
    }

    public function deleting(Post $post): void
    {
        if ($post->is_featured) {
            $post->is_featured = false;
            $post->saveQuietly();
        }
    }
}

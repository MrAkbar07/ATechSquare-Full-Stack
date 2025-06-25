<?php

namespace App\Observers;

use App\Enums\JobStatus;
use App\Models\Job\Job;
use Illuminate\Support\Facades\Cache;

class JobObserver
{
    /**
     * Handle the Job "created" event.
     */
    public function created(Job $job): void
    {
        //
    }

    /**
     * Handle the Job "updated" event.
     */
    public function updated(Job $job): void
    {
        //
    }

    /**
     * Handle the Post "created" and "updated" event.
     */
    public function saved(Job $job): void
    {
        Cache::forget('job-status-counts');
    }

    /**
     * Handle the Job "deleted" event.
     */
    public function deleted(Job $job): void
    {
        $job->update(['job_status' => JobStatus::Trashed]);
        Cache::forget('job-status-counts');
    }

    /**
     * Handle the Job "restored" event.
     */
    public function restored(Job $job): void
    {
        if($job->job_status == JobStatus::Trashed) {
            $job->update(['job_status' => JobStatus::Draft]);
        }
        Cache::forget('job-status-counts');
    }

    public function deleting(Job $job): void
    {
        if ($job->is_featured) {
            $job->is_featured = false;
            $job->saveQuietly();
        }
    }

    /**
     * Handle the Job "force deleted" event.
     */
    public function forceDeleted(Job $job): void
    {
        //
    }
}

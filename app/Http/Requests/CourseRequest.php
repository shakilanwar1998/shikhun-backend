<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CourseRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|numeric',
            'category_id' => 'required|numeric',
            'title' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'course_image' => 'nullable',
            'start_date' => 'required|date',
            'published' => 'nullable',
            'featured' => 'nullable',
            'trending' => 'nullable',
            'free' => 'nullable',
        ];
    }
}

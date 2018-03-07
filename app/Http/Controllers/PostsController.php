<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostsController extends Controller
{
  public function index()
  {
      return Post::all();
  }

  public function show(Post $post)
  {
      return $post;
  }

  public function store(Request $request)
  {

      $this->validate($request, [
          'title' => 'required|unique:posts|max:255',
          'body' => 'required',
      ]);
      $post = Post::create($request->all());

      return response()->json($post, 201);
  }

  public function update(Request $request, Post $post)
  {
      $post->update($request->all());

      return response()->json($post, 200);
  }

  public function delete(Post $post)
  {
      $post->delete();

      return response()->json(null, 204);
  }
}

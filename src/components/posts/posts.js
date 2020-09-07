import React from 'react';
import p from './css/posts.module.css'




function Posts() {
  return (
    <div className = {p.posts}>
        <div className = {p.posts_avatar}>
            <a><img className = {p.avatar} src = {require('./img/avatar.png')}/></a>
        </div>
        <div className = {p.posts_input}>
          <form>
          <div className= {p.form_group}>
    <textarea className={p.form_control} rows="3"></textarea>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
    <button type="submit" class="btn btn-primary">Опубликовать</button>
          </div>
          </form>
           
        </div>
    
    </div>
  );
}

export default Posts;
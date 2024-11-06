from fastapi import HTTPException
from sqlalchemy import select

from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from api.comments.models import Comment
from api.comments.schemas import Comment_create_schema
from api.posts.models import Post

async def create_comment(db: AsyncSession, comment_create_schema: Comment_create_schema, post: Post):
    comment = Comment(
        content=comment_create_schema.content,
        created_at=datetime.now(),
        post_id=post.id
    )
    print(comment.content)
    db.add(comment)
    await db.commit()
    await db.refresh(comment)
    
    return

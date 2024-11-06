from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel

from starlette import status

from config.db import get_async_db

from api.comments.schemas import Comment_create_schema
from api.comments.services import create_comment

from api.posts.services import get_post
from api.posts.models import Post

router = APIRouter(
        prefix="/comment",
)

@router.post("/create/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
async def comment_create(post_id: int, comment: Comment_create_schema, db: AsyncSession = Depends(get_async_db)):
    post = await get_post(db, post_id=post_id)
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    await create_comment(db, comment, post)
    return

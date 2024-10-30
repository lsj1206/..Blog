from pydantic import BaseModel
from datetime import datetime
from comments.schemas import comment_schema

class post_list_schema(BaseModel):
    id: int
    title: str
    content: str
    created_at: datetime

class post_detail_schema(BaseModel):
    id: int
    title: str
    content: str
    created_at: datetime
    comments: list[comment_schema]


class post_create_schema(BaseModel):
    title: str
    content: str

class post_thumbnail_schema(BaseModel):
    id: int
    title: str
    created_at: datetime

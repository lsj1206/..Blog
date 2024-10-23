import datetime

from pydantic import BaseModel

class post_list_schema(BaseModel):
    id: int
    title: str
    content: str
    created_at: datetime.datetime

class post_create_schema(BaseModel):
    title: str
    content: str

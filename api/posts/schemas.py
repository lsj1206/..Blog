from pydantic import BaseModel
from datetime import datetime

class post_list_schema(BaseModel):
    id: int
    title: str
    content: str
    created_at: datetime

class post_create_schema(BaseModel):
    title: str
    content: str

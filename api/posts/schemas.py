import datetime

from pydantic import BaseModel

class post_create(BaseModel):
    id: int
    title: str
    content: str
    created_at: datetime.datetime

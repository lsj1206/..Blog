import datetime

from pydantic import BaseModel, field_validator

class Comment_schema(BaseModel):
    id: int
    content: str
    created_at: datetime.datetime


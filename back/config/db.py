from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite+aiosqlite:///app.db"
async_engine = create_async_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=async_engine, class_=AsyncSession)
SessionLocal.expire_on_commit = False


Base = declarative_base()

async def get_async_db():
    async with SessionLocal() as db:
        try:
            yield db
        except Exception as e:
            raise e
        finally:
            await db.close()

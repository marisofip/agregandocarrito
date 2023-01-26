"""empty message

Revision ID: 12504233aeb0
Revises: 4540fd0981b0
Create Date: 2023-01-26 19:49:52.579535

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '12504233aeb0'
down_revision = '4540fd0981b0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tip_documents', schema=None) as batch_op:
        batch_op.alter_column('tipo',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=10),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tip_documents', schema=None) as batch_op:
        batch_op.alter_column('tipo',
               existing_type=sa.String(length=10),
               type_=sa.INTEGER(),
               existing_nullable=True)

    # ### end Alembic commands ###

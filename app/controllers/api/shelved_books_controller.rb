class Api::ShelvedBooksController < ApplicationController

  def create
    @shelved_book = ShelvedBook.new(shelved_book_params)
    if @shelved_book.save
      render :show
    else
      render @shelved_book.errors.full_messages, status: 406
    end
  end

  def destroy
    @shelved_book = ShelvedBook.find(params[:id])
    if @shelved_book
      @shelved_book.destroy
      render :show
    else
      render json: ["book does not exist on this shelf"], status: 422
    end
  end

  def update
    @shelved_book = ShelvedBook.find(params[:id])

    if @shelved_book.update(shelved_book_params)
      render :show
    else
      render json: @shelved_book.errors.full_messages, status: 406
    end
    
  end

  private

  def shelved_book_params
    params.require(:shelved_book).permit(:book_id, :shelf_id)
  end
end

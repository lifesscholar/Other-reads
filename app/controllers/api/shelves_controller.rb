class Api::ShelvesController < ApplicationController


  def index
    
    @shelves = Shelf.where(user_id: current_user.id)
    if @shelves.first === nil
      Shelf.create(shelf_name: "Read", exclusive: true, user_id: current_user.id)
      Shelf.create(shelf_name: "Reading", exclusive: true, user_id: current_user.id)
      Shelf.create(shelf_name: "Will Read", exclusive: true, user_id: current_user.id)

      @shelves = Shelf.where(user_id: current_user.id)
    end
    render :index
  end

  def create
    @shelf = Shelf.new(shelf_params)
    @shelf.user_id = current_user.id

    if @shelf.save
      render :show
    else
      render json: @shelf.errors.full_messages, status: 406
    end
  end

  def show
    @shelf = Shelf.find(params[:id])
    render :show
  end

  def update
    @shelf = Shelf.find(params[:id])

    if @shelf.update(shelf_params)
      render :show
    else
      render json: @shelf.errors.full_messages, status: 406
    end
  end

  def destroy
    @shelf = Shelf.find(params[:id])
    if @shelf.exclusive
      render json: ["cannot destroy default shelf"], status: 403
    elsif @shelf.destroy
      render :show
    else
      render json: @shelf.errors.full_messages, status: 406
    end
  end

  private

  def shelf_params
    params.require(:shelf).permit(:shelf_name)
  end

end

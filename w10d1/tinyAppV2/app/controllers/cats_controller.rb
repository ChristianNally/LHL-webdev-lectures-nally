class CatsController < ApplicationController
    def index
        @secretstuff = 'in ancient Egypt, cats were worshipped as powerful creatures.'
        @cats = Cat.all
    end

#     def show
#         @cat = Cat.find(params[:id])
#     end

#     def new

#     end

    def create
        render plain: params[:cat].inspect
    end

#     def create
# #        render plain: params[:cat].inspect
#         @cat = Cat.new(cat_params)
#         @cat.save
#         redirect_to @cat
#     end

#     private def cat_params
#         params.require(:cat).permit(:title, :body)
#     end

end

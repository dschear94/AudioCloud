    json.extract! user, :id, :username, :email
    json.found true
    json.entryField params[:user][:entryField]

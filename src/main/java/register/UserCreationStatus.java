package register;

public enum UserCreationStatus {
    DUPLICATE_LOGIN("Użytkownik z takim loginem już istnieje.", 409),
    DUPLICATE_EMAIL("Użytkownik z takim adresem e-mail już istnieje.", 409),
    
    DUPLICATE_EMAIL_AND_LOGIN("Użytkownik z takim adresem e-mail oraz loginem już istnieje.", 409),
    
    DEFAULT("Stan domyślny", 409),
    SUCCESS("Wszystko prawidłowo - użytkownik został stworzony.", 201);

    private final String message;
    private final int statusCode;

    UserCreationStatus(String message, int statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }

    public String getMessage() {
        return message;
    }

    public int getStatusCode() {
        return statusCode;
    }
}



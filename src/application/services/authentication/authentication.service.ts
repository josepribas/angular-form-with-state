interface AuthenticationService {
    login(username: string, password: string): void;
    logout(): void;
}

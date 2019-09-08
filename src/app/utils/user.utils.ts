import { User } from '../models/user.model';

export class UserUtil {
    static save(user: User) {
        localStorage.setItem('app.user', JSON.stringify(user));
    }

    static get(): User {
        const data = localStorage.getItem('app.user');
        if (data)
            return JSON.parse(data);
        else
            return null;
    }

    static clear() {
        localStorage.removeItem('app.user');
    }

    public static isInRole(role: string): boolean {
        const user = this.get();

        if (!user)
            return false;

        if (!user.roles || user.roles.length == 0)
            return false;

        return user.roles.includes(role);
    }
}
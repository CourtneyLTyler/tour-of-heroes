import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// the services exposes its cache of messages and two methods (add a message or clear the cache)
export class MessageService {
    messages: string[] = [];

    add(message: string) {
        this.messages.push(message);
    }

    clear() {
        this.messages = [];
    }
}

import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page = 1 }) {
  return request(`/api/users?page=${page}&limit=${PAGE_SIZE}`);
}

export function create(user) {
  return request(`/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  });
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, users) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(users),
  });
}

import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts }) => contacts.items;

export const selectFilters = ({ filters }) => filters;

export const selectStatus = ({ contacts }) => contacts.status;

export const selectError = ({ contacts }) => contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    const filteredContacts = [...contacts].filter(({ name }) =>
      name.toUpperCase().includes(filters.name.toUpperCase())
    );

    return filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
  }
);

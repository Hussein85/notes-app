import {
  SHOW_ALL,
  SHOW_STARRED,
  SHOW_DELETED,
  SHOW_ARCHIEVED
} from "../actions/types";

export const getVisibleNotes = (notes, visibilityFilter) => {
  const sortedNotes = notes.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  switch (visibilityFilter) {
    case SHOW_ARCHIEVED:
      return sortedNotes.filter(
        note => note.archieved_at && note.deleted_at === null
      );
    case SHOW_STARRED:
      return sortedNotes.filter(
        note =>
          note.starred && note.deleted_at === null && note.archieved_at === null
      );
    case SHOW_DELETED:
      return sortedNotes.filter(note => note.deleted_at);
    case SHOW_ALL:
      return sortedNotes.filter(
        note => note.deleted_at === null && note.archieved_at === null
      );
    default:
      return sortedNotes;
  }
};

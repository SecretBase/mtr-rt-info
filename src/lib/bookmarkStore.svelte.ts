import type { lightRailStationsConfig } from './lightRightStations';
import type { LINE } from './lines';
import { browser } from '$app/environment';
import type { STATION } from './stations';

type MTRBookmark = {
	type: 'mtr';
	line: LINE;
	station: STATION;
};

type LightRailBookmark = {
	type: 'lightRail';
	station: keyof typeof lightRailStationsConfig;
};

const getBookmarks = (): Bookmark[] => {
	if (browser) {
		try {
			return JSON.parse(window.localStorage.getItem('bookmarks') ?? '[]');
		} catch (e) {
			return [];
		}
	}
	return [];
};

export type Bookmark = MTRBookmark | LightRailBookmark;

export const createBookmarkStore = () => {
	let bookmarks = $state(getBookmarks());

	function setBookmark(bookmark: Bookmark) {
		bookmarks = bookmarks.concat(bookmark);
		window.localStorage.setItem('bookmark', JSON.stringify(bookmarks));
	}

	function removeBookmark(bookmark: Bookmark) {
		bookmarks = bookmarks.filter((bm) => {
			if (bm.type === 'mtr' && bm.station === bookmark.station && bm.line === bookmark.line) {
				return false;
			}

			if (bm.type === 'lightRail' && bm.station === bookmark.station) {
				return false;
			}

			return true;
		});

		window.localStorage.setItem('bookmark', JSON.stringify(bookmarks));
	}

	function hasBookmark(bookmark: Bookmark) {
		return bookmarks.some((bm) => {
			if (bm.type === 'mtr' && bm.station === bookmark.station && bm.line === bookmark.line) {
				return true;
			}

			if (bm.type === 'lightRail' && bm.station === bookmark.station) {
				return true;
			}

			return false;
		});
	}

	return {
		get bookmarks() {
			return bookmarks;
		},
		setBookmark,
		removeBookmark,
		hasBookmark
	};
};

export const bookmarkStore = createBookmarkStore();

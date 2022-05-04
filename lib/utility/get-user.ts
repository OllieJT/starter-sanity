import userStore from "part:@sanity/base/user";

// Sanity
interface CurrentUser {
	id: string;
	projectId: string;
	displayName: string;
	familyName: string;
	givenName: string;
	middleName: string;
	imageUrl: string;
	createdAt: string;
	updatedAt: string;
	isCurrentUser: true;
}

export function getUser(id: string): Promise<CurrentUser> {
	return userStore.getUser(id);
}

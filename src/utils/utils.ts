export const truncateText = (text: string, maxLength: number = 100): string => {
    if (text.length <= maxLength) {
        return text;
    }
    const truncated = text.slice(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    return lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
}

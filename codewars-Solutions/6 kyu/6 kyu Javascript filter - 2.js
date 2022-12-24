function roomMates( rooms, floor ){
    return rooms.slice(6 * (floor-1), 6 * floor).filter(x => x.length > 0);
}


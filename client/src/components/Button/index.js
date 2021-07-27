import React, { useEffect, useState } from 'react';

function Button() {
    const [content, setContent] = useState();

    return (
        <Button>
            {content}
        </Button>
    )
}
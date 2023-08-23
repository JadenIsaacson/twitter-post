import react from "react";

const Post = ({post, handleDeleteClick, handleLikeClick, handleRepostClick, i}) => {
    return (
        <div className="post-container">
            <div className="post-header">
                <div className="post-header-info">
                    <div>{post?.name}</div>
                    <span>@{post?.name}</span>
                </div>
                <p>{post?.post}</p>
            </div>
            <div className="post-info-counts">
                <div>
            <svg onClick={() => handleLikeClick(i)} class="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <div>{post?.likes}</div>
            </div>
            <div>
            <svg onClick={() => handleRepostClick(i)} class="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
            </div>
            <div>
            <svg onClick={() => handleDeleteClick(i)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
<g fill="#657786" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.33333,5.33333)"><path d="M20.5,4c-0.49034,-0.00628 -0.95279,0.22749 -1.23848,0.62606c-0.28569,0.39856 -0.35854,0.9116 -0.19511,1.37394h-4.42578c-1.83725,0 -3.5577,0.91945 -4.57617,2.44922l-2.36719,3.55078h-0.19727c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h0.76367c0.12867,0.01945 0.25932,0.02208 0.38867,0.00781l2.47266,23.07813c0.29835,2.78234 2.67084,4.91406 5.46875,4.91406h14.81055c2.79791,0 5.1704,-2.13172 5.46875,-4.91406l2.47461,-23.07813c0.12677,0.01359 0.25475,0.01097 0.38086,-0.00781h0.77148c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381h-0.19727l-2.36719,-3.55078c-1.01929,-1.52894 -2.73955,-2.44922 -4.57617,-2.44922h-4.42578c0.16343,-0.46234 0.09058,-0.97538 -0.19511,-1.37394c-0.28569,-0.39856 -0.74814,-0.63234 -1.23848,-0.62606zM14.64063,9h18.71875c0.83737,0 1.61537,0.41622 2.08008,1.11328l1.25781,1.88672h-25.39453l1.25781,-1.88672c0.00065,-0.00065 0.0013,-0.0013 0.00195,-0.00195c0.46348,-0.69619 1.23938,-1.11133 2.07813,-1.11133zM11.66992,15h24.66016l-2.43945,22.76563c-0.13765,1.28366 -1.19624,2.23438 -2.48633,2.23438h-14.81055c-1.29009,0 -2.34673,-0.95071 -2.48437,-2.23437z"></path></g></g>
</svg>
            </div>
            </div>
        </div>
    )
}

export default Post
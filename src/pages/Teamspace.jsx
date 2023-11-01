import { Link, Outlet } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../bootstrap.css';

const TeamSpace = () => {
  const pathname = window.location.pathname;

  return (
    <>
      <nav
        className='navbar navbar-expand navbar-light bg-white topbar static-top shadow'
        style={{ height: '100px' }}
      >
        {/*<!-- Sidebar Toggle (Topbar) -->*/}

        {/*<!-- Topbar Search -->*/}
        {/* <form className='d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search zindex'> */}
        <form className='d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search'>
          <div className='input-group'>
            <div className='sidebar-brand d-flex align-items-center justify-content-center'>
              <a href={'/teamspace/main'}>
                <img
                  width={160}
                  height={28}
                  src={
                    'https://eclass.dongguk.edu/lmsdata/img/template1/logo.png'
                  }
                  alt='logo'
                />
              </a>

              <div className='h6 text-gray-800'>
                {/* <button className='btn btn-link d-md-none rounded-circle mr-3'>
                <FontAwesomeIcon icon={faBars} />
              </button> */}
                오픈소스소프트웨어프로젝트
              </div>
            </div>
          </div>
        </form>

        {/*<!-- Topbar Navbar -->*/}
        <div className='sidebar-brand d-flex align-items-center justify-content-center'>
          {/*<!-- Nav Item - Alerts -->*/}
          {/* <InvitationNav /> */}
          {/*<!-- Nav Item - User Information -->*/}

          <span className='mr-2 d-none d-lg-inline text-gray-600 small user-info'>
            2023111111 홍길동님
            {/* {userInfo ? `${userInfo.name} (${userInfo.studentId})` : ''} */}
          </span>

          <Link to={'/'} className='nav-link'>
            <div className='nav-item text-gray-600 small mr-4'>
              <span className='mr-2 ml-2'> | </span> Logout
            </div>
          </Link>
        </div>
      </nav>
      <div id='wrapper'>
        {/*<!-- Sidebar -->*/}
        <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'>
          {/*<!-- Sidebar - Brand -->*/}

          {/*<!-- Nav Item - 메인 페이지 -->*/}

          <li className='nav-item dropdown no-arrow mx-1'>
            <div
              style={{ textAlign: 'center' }}
              className='link-item-container'
            >
              <a
                href={'/teamspace/main'}
                className={
                  pathname === '/teamspace/main'
                    ? 'link-item active'
                    : 'link-item'
                }
              >
                <span>홈</span>
              </a>
            </div>
          </li>
          {/*<!-- Nav Item - 일정관리 페이지 -->*/}

          <li className='nav-item dropdown no-arrow mx-1'>
            <div
              style={{ textAlign: 'center' }}
              className='link-item-container'
            >
              <a
                href={'/teamspace/schedule'}
                className={
                  pathname === '/teamspace/schedule'
                    ? 'link-item active'
                    : 'link-item'
                }
              >
                <span>일정</span>
              </a>
            </div>
          </li>
          {/*<!-- Nav Item - 회의록 페이지 -->*/}
          <li className='nav-item dropdown no-arrow mx-1'>
            {/* <a
                className='nav-link collapsed dropdown-button'
                href='/document'
              > */}

            <div
              style={{ textAlign: 'center' }}
              className='link-item-container'
            >
              <a
                href={'/teamspace/document'}
                className={
                  pathname === '/teamspace/document'
                    ? 'link-item active'
                    : 'link-item'
                }
              >
                <span>회의록</span>
              </a>
            </div>
            {/* </a> */}
          </li>
        </ul>
        {/*<!-- End of Sidebar -->*/}

        {/*<!-- Content Wrapper -->*/}
        <div id='content-wrapper' className='d-flex flex-column'>
          {/*<!-- Main Content -->*/}
          <div id='content'>
            {/*<!-- Topbar -->*/}

            {/*<!-- Begin Page Content -->*/}
            <div className='container-fluid'>
              <Outlet />
              {/*<!-- Page Heading -->*/}
              <div className='d-sm-flex align-items-center justify-content-between mb-4'></div>

              {/*<!-- Content Row -->*/}

              <div className='row'>
                {/*<!-- 파일 스토리지 섹션 -->*/}
                {/* <FileStorage
      teamId={{ id: teamId }}
      handleUploadModalShow={handleUploadModalShow}
      handleHistoryModalShow={handleHistoryModalShow}
      handleFileIdFromStorage={handleFileIdFromStorage}
      handleVersionUploadModalShow={handleVersionUploadModalShow}
    /> */}
                <div className='col-xl-4 mb-4'>
                  {/*<!-- 팀 구성 정보 -->*/}

                  {/* <TeamInfo
      teamId={{ id: teamId }}
      handleInviteModalShow={handleInviteModalShow}
    />
                  {/*<!--공지사항-->*/}
                  {/* <Notice teamId={{ id: teamId }} /> */}
                </div>
                {/*<!-- /.container-fluid -->*/}
              </div>
              {/*<!-- End of Main Content -->*/}

              {/*<!-- End of Footer -->*/}
            </div>

            {/*<!-- End of Content Wrapper -->*/}
          </div>
        </div>
        {/* 팀원 초대 모달 */}
        {/* {inviteModalShow && (
    <InviteModal
      userInfo={userInfo}
      teamId={{ id: teamId }}
      inviteModalShow={inviteModalShow}
      handleInviteModalShow={handleInviteModalShow}
    />
  )} */}
      </div>
    </>
  );
};

export default TeamSpace;

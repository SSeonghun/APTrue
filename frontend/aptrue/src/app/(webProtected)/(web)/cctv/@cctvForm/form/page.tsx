import style from '@/app/(webProtected)/(web)/cctv/@cctvForm/cctvForm.module.scss';
import CCTVForm from '@/components/cctv/cctvForm';

export default function Page() {
  return (
    <div className={style['cctv-form-container']}>
      <CCTVForm />
    </div>
  );
}